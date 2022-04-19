module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a62d83f4d0371812bf528f0679bc0d7'),
  },
});
