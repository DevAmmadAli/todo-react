import SignUpForm from '../../components/organism/SignupForm/SignupForm';
import AuthTemplate from '../../templates/AuthTemplate';

const SignUpPage: React.FC = () => {
    return (
        <AuthTemplate
            alt="Sign Up"
            formTitle="Sign Up"
            footerText="Already have an account?"
            footerLink="/login"
        >
            <SignUpForm />
        </AuthTemplate>
    );
};

export default SignUpPage;
