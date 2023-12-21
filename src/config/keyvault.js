const { DefaultAzureCredential } = require('@azure/identity');
const { SecretClient } = require('@azure/keyvault-secrets');

const getSecret = async (secretName, KeyVaultName) => {
   if (!secretName || !KeyVaultName) {
      throw Error('getSecret: Required params missing');
   }

   const credential = new DefaultAzureCredential();

   //    build the URL to reach your key vault
   const url = `https://${KeyVaultName}.vault.azure.net`;

   try {
      // create client to connect to service
      const client = new SecretClient(url, credential);

      // Get a specified secret from a given key vault.
      const latestSecret = await client.getSecret(secretName);

      console.log(`Secret (${secretName}=${latestSecret.value})`);

      //   return value
      return latestSecret.value;
   } catch (ex) {
      console.log(ex);
      throw ex;
   }
};

// export the module
module.exports = { getSecret };
