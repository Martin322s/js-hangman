const Logo = ({ type }) => {
    if (type === "muted") {
        return (
            <div>
                <img src="/images/logo-muted.svg" />
            </div>
        );
    }

    return (
        <div>
            <img src="/images/logo.svg" />
        </div>
    );
}

export default Logo;