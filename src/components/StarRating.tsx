import { Star } from "lucide-react";
import { useState } from "react";
import styles from "@/components/StarRating.module.css";

type Props = {
  defaultRating: number;
}

const StarRating = ({ defaultRating }: Props) => {
  const [rating, setRating] = useState<number>(defaultRating);
  const [hover, setHover] = useState<number>(0);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={star}>
            <input
              className={styles.input}
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <Star
              className={styles.star}
              size={18}
              fill={currentRating <= (hover || rating) ? "#EB9C44" : "none"}
              onClick={() => setHover(currentRating)}
            />
          </label>
        );
      })}
    </>
  );
};

export default StarRating;


