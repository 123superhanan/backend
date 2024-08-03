import User from "../Model/UserModel.js";


export const SignUp = async (req, res) => {
    try {
        const user = await new User(req.body);
        user.save();
        res.status(200).json({ msg: 'signUp successfully'})
    } catch (error) {
        res.status(500).json(error)
    }
};
