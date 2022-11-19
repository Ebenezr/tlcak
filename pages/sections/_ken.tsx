import { ReadMore } from "../../components/Readmore";
const Ken = () => {
  return (
    <section className="h-auto py-6 border-1 border-green-200 px-4" id="ken">
      {/* section title */}
      <h3 className="font-regular text-center text-lg text-gray-400">
        ABOUT KEN
      </h3>
      {/* header */}
      <div className="text-center">
        <p className="text-center mt-4 whitespace-pre-line font-semibold text-neutral-700">
          Rev. Lukiri Kennedy
        </p>
      </div>
      {/* image wrapper */}
      <div className="bg-neutral-700 w-full h-28 rounded-md my-4"></div>
      {/* text content */}
      <ReadMore>{aboutKen}</ReadMore>
    </section>
  );
};

export default Ken;
const aboutKen =
  "Amid youthful age, a young man called to serve God and His people found himself on a crusade ground ready to play football unknown to him, it was the day the lord had made for him to give his life to Jesus Christ in 1992. On January 3rd, 2016, he founded True Light Christian Assembly Kenya. The church started in one of the houses of the then-member. By March 20th same year they moved out of the house to a rental classroom where the 1st legal service was conducted. God gave Rev. Lukiri Kennedy the vision of Restoring Lives through the Word of God along with the assignment to reach out to the uttermost parts of the world through missions and church planting. Rev Lukiri Kennedy is very didactic with a unique anointing to simplify the principles of the Word of God. His incisive command of the scripture allows him to interpret the Word of   God within its context and bring it to life so that it applies to everyday living and is relevant to his audience. Rev Lukiri is supported in ministry by his wife, Melab Lukiri, and their three daughters, Eden, Karlyn, and Favour.";
