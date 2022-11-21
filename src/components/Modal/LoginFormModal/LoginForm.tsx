interface LoginFormProps {
    switchModal: () => void
}

export const LoginForm = ({ switchModal }: LoginFormProps) => {
    return(
        <div className="login">
            <form action="" className="login-form">
                <input type="text" placeholder="Login" className="login-name login-input"/>
                <input type="text" placeholder="Password" className="login-password login-input"/>
                <button onClick={() => switchModal()} className="base-button login-sign-in" type="submit">Sign In</button>
            </form>
        </div>
    )
}