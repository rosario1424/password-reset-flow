import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = { userId: decoded.id };

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default userAuth;




/*import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again' });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (!tokenDecode.id) {
            return res.json({ success: false, message: 'Not Authorized. Login Again' });
        }

        // ✅ SAFE & STANDARD
        req.user = {
            userId: tokenDecode.id
        };

        next();
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export default userAuth;*/




/*import jwt from "jsonwebtoken";

const userAuth = async (req, res, next)=> {
    const {token} = req.cookies;

    if(!token){
        return res.json({ success: false, message: 'Not Authorized.Login Again'})
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({ success: false, message: 'Not Authorized.Login Again' });
        }

        next();

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export default userAuth;*/