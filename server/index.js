const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const forge = require('node-forge');
const OAuth = require('mastercard-oauth1-signer');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With'], // Include the necessary headers
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/api/mastercard-checkout', (req, res) => {
  // 1. Load the P12 certificate and extract the signing key
  fs.readFile('../api_keys/1aTdpB7NpV0xGN1F8Ial.p12', (err, data) => {
    if (err) {
      console.error('Error reading keystore file:', err);
      res.status(500).json({ error: 'Failed to read keystore file' });
      return;
    }

    try {
      const p12Content = data.toString('binary');
      const p12Asn1 = forge.asn1.fromDer(p12Content, false);
      const p12 = forge.pkcs12.pkcs12FromAsn1(p12Asn1, false, '1aTdpB7NpV0xGN1F8Ial');
      const keyObj = p12.getBags({
        friendlyName: 'defaultsandboxsigningkey',
        bagType: forge.pki.oids.pkcs8ShroudedKeyBag,
      }).friendlyName[0];
      const signingKey = forge.pki.privateKeyToPem(keyObj.key);
      console.log("signingKey: " + signingKey);

      // 2. Generate OAuth Signature
      const consumerKey = 'DxrnZju1KxttxDNLjczmeZ4zMC72hlAofSpEi6XF612c7f02!5a6ec21a2cf44abe9a7b59376fd5e6a20000000000000000';
      const uri = 'https://sandbox.api.mastercard.com/srci/api'; // Replace with actual endpoint
      const method = 'POST';
      const payload = JSON.stringify(req.body); 
      const bodyHash = crypto.createHash('sha256').update(payload).digest('base64'); 

      const authHeader = OAuth.getAuthorizationHeader(
        uri,
        method,
        bodyHash,
        consumerKey,
        signingKey
      );
      console.log("authHeader: " + authHeader);
      res.json({ authorizationHeader: authHeader });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to generate signature ' + error });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});