import { Heart } from "lucide-react";
import { useState } from "react";

const HeartIcon = () => {
    const [filled, setFilled] = useState(false);

    return(
        <>
            <Heart
            color="var(--HeaderTextColor)"
            size={20}
            fill={filled ? "var(--HeaderTextColor)" : "none"}
            onClick={() => setFilled((prevState) => !prevState)}
          />
        </>
    )
}

export default HeartIcon;