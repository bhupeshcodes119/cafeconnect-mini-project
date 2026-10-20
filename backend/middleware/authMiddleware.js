import jwt from 'jsonwebtoken';
export function requireAuth(req,res,next){ const token=(req.headers.authorization||'').replace('Bearer ',''); if(!token) return res.status(401).json({message:'Login required'}); try{req.user=jwt.verify(token,process.env.JWT_SECRET);next();}catch{return res.status(401).json({message:'Invalid login token'});} }
export function requireStaff(req,res,next){ if(req.user?.role!=='staff') return res.status(403).json({message:'Staff access required'}); next(); }
