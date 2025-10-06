const { ethers } = require('ethers');

function verifySignature(message, signature) {
  try {
    const signer = ethers.verifyMessage(message, signature);
    return {
      isValid: true,
      signer,
      originalMessage: message
    };
  } catch (err) {
    return {
      isValid: false,
      error: err.message,
      originalMessage: message
    };
  }
}

module.exports = { verifySignature };
