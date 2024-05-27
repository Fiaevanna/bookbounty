import { Star } from "lucide-react";
import { useState } from "react";
import styles from "@/components/StarRating.module.css";

type Props = {
  defaultRating?: number;
  onRatingChange?: (rating: number) => void;
};

const StarRating = ({ defaultRating, onRatingChange }: Props) => {
  const [rating, setRating] = useState<number>(defaultRating || 0);
  const [hover, setHover] = useState<number>(0);

  const handleOnRatingChange = (newRating: number) => {
    setHover(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

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
              onClick={() => handleOnRatingChange(currentRating)}
            />
          </label>
        );
      })}
    </>
  );
};

export default StarRating;
