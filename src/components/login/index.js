import "@aws-amplify/ui-react/styles.css";
import {
    withAuthenticator,
    Button,
    Heading,
    View,
    Card,
} from "@aws-amplify/ui-react";

function Login({ signOut }) {
    return (
        <View className="App">
            <Card>
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator(Login);