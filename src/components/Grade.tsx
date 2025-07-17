type Props = {
    grade: number;
}

export const EmojiRating = ({grade} : Props) => {
    if (grade > 5) grade = 5;
    if (grade < 0) grade = 0;

    let newGrade = Math.floor(grade);

    const emojiList = ['😢', '☹️', '😐', '😬', '😁']
    const rating = `${emojiList[newGrade - 1]}`.repeat(newGrade) + '😶'.repeat(5 - newGrade);

    return (
        <div className="text-5xl text-white font-bold">
            {grade.toFixed(1)} {rating}
        </div>
    );
}