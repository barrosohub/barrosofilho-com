interface ProfileImageProps {
    image: string,
    alt: string,
    className: string
}

const ProfileImage = ({ image, alt, className }: ProfileImageProps) => {
    return (
        <img src={image} alt={alt} className={className} />
    )
}

export default ProfileImage