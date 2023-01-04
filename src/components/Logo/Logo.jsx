const Logo = ({ type }) => {
    if (type === "default") {
        return (
            <div>
                <img src="/images/logo.svg" />
            </div>
        );
    } else {
        return (
            <div>
                <img src="/images/logo-muted.svg" />
            </div>
        );
    }
}

export default Logo;