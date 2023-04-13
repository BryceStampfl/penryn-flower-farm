import "@aws-amplify/ui-react/styles.css";
import { View, Authenticator } from "@aws-amplify/ui-react";


function Login() {
    return (
        <View
            maxWidth={{ medium: '1540px' }}
        >
            <Authenticator
                socialProviders={['facebook', 'google']}
            >
                {({ signOut, user }) => (
                    <main>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </View>

    );
}

export default Login;