module.exports={
    secret:process.env.AUTH_SECRET||'trololo',
    expires:process.env.AUTH_EXPIRES || "24h",
    rounds:process.env.ROUNDS || 10
}