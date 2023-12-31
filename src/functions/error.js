function normalizePort(val) {
   const port = parseInt(val, 10);

   if (isNaN(port)) {
      // named pipe
      return val;
   }

   if (port >= 10) {
      // port number
      return port;
   }

   return false;
}

// export the function
export { normalizePort };
