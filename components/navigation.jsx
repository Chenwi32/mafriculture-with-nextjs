import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
    return (
        <div>
            <div className="container">
                <div className="logo">
                <Link href='/'>
                    <Image src='/logo.png'
                    width={100}
                    height={50 } />
                </Link>
            </div>
            </div>
            
        </div>
    );
}

export default Navigation;