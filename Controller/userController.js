/*import User from "../Model/UserModel.js";

export const SignUp = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).json({ msg: 'Sign Up successfully', user: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to sign up', details: error });
    }
};
*/
