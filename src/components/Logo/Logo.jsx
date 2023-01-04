const Logo = ({ type }) => {
    if (type === "muted") {
        return (
            <img src="/images/logo-muted.svg" />
        );
    }

    return (
        <img src="/images/logo.svg" />
    );
}

export default Logo;