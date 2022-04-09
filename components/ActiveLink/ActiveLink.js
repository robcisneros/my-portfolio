import { useRouter } from "next/router";

const ActiveLink = ({ children, href}) => {
    const router = useRouter();

    const style = {
        color: router.asPath === href ? 'white' : '#6B7280',
        fontWeight: router.asPath === href ? 'bold' : 'normal',
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick} style={style} >
            {children}
        </a>
    )
};

export default ActiveLink;