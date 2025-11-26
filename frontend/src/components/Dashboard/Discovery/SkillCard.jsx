// import React, { useState } from "react";
// import { FaEllipsisV } from "react-icons/fa";
// import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
// import { HiOutlinePaperAirplane } from "react-icons/hi2";
// import { BsCalendar3 } from "react-icons/bs";
// import DefaultIMG from "../../../assets/DefaultLM.png";
// import { IoMdSend } from "react-icons/io";

// import Tech_1 from "../../../assets/Tech_1.jpg";
// import Tech_2 from "../../../assets/Tech_2.png";
// import Tech_3 from "../../../assets/Tech_3.jpg";

// import Cod_1 from "../../../assets/Cod_1.png";
// import Cod_2 from "../../../assets/Cod_2.jpg";
// import Cod_3 from "../../../assets/Cod_3.jpg";

// import Lan_1 from "../../../assets/Lan_1.jpg";
// import Lan_2 from "../../../assets/Lan_2.png";
// import Lan_3 from "../../../assets/Lan_3.png";

// import Art_1 from "../../../assets/Art_1.jpg";
// import Art_2 from "../../../assets/Art_2.png";

// import LF_1 from "../../../assets/LF_1.jpeg";
// import LF_2 from "../../../assets/LF_2.jpg";

// import GM_1 from "../../../assets/GM_1.jpg";
// import GM_2 from "../../../assets/GM_2.jpg";

// import Mus_1 from "../../../assets/Mus_1.jpg";
// import Mus_2 from "../../../assets/Mus_2.jpg";
// import Mus_3 from "../../../assets/Mus_3.png";

// import toast, { Toaster } from "react-hot-toast";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // ⭐ Category → Images mapping
// const categoryImages = {
//   Technology: [Tech_1, Tech_2, Tech_3],
//   Coding: [Cod_1, Cod_2, Cod_3],
//   Languages: [Lan_1, Lan_2, Lan_3],
//   Art: [Art_1, Art_2],
//   LifeCoach: [LF_1, LF_2],
//   Sports: [GM_1, GM_2],
//   Music: [Mus_1, Mus_2, Mus_3],
// };

// // ⭐ Get random image based on category
// const getRandomCategoryImage = (category) => {
//   const images = categoryImages[category];
//   if (!images || images.length === 0) return null;
//   const randomIndex = Math.floor(Math.random() * images.length);
//   return images[randomIndex];
// };

// // ⭐ Render stars for rating
// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center gap-0 text-[#f19812] text-sm">
//       {[...Array(fullStars)].map((_, i) => (
//         <MdStarRate key={`full-${i}`} />
//       ))}
//       {hasHalfStar && <MdOutlineStarHalf />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <MdStarBorder key={`empty-${i}`} />
//       ))}
//     </div>
//   );
// };

// const SkillCard = ({ skill, isBookmarked, onBookmarkToggle, onSendRequest }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // ⭐ Decide which image to show
//   const randomCategoryImage = getRandomCategoryImage(skill.category);
//   const imageToShow = skill.image || randomCategoryImage || DefaultIMG;

//   const handleBookmark = () => {
//     onBookmarkToggle(skill.id);
//     toast.success("Bookmarked this skill 🤝", {
//       style: {
//         background: "#000",
//         color: "#fff",
//         fontSize: "14px",
//       },
//       icon: "✅",
//     });
//     setMenuOpen(false);
//   };

//   return (
//     <div className="relative bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 overflow-hidden flex flex-col">
//       {/* Skill Image */}
//       <div className="relative w-full h-32">
//         <img
//           src={imageToShow}
//           alt="Skill"
//           className="w-full h-full object-cover"
//         />

//         {/* Three Dots Menu */}
//         <div className="absolute top-3 right-3">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-xl text-gray-700 hover:text-indigo-600"
//           >
//             <FaEllipsisV />
//           </button>

//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
//               <button
//                 onClick={handleBookmark}
//                 className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//               >
//                 {isBookmarked ? "Remove Bookmark" : "Bookmark this Skill"}
//               </button>
//               <button
//                 onClick={() => {
//                   toast("Coming soon 🚀", {
//                     style: { background: "#000", color: "#fff" },
//                   });
//                   setMenuOpen(false);
//                 }}
//                 className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//               >
//                 Share Skill
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col space-y-4">
//         {/* Profile & Rating */}
//         <div className="flex items-center gap-3">
//           <img
//             src={
//               skill.user?.profilePicture
//                 ? skill.user.profilePicture
//                 : `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                     skill.user?.name || "User"
//                   )}&background=random`
//             }
//             alt={skill.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover border"
//           />

//           <div>
//             <h3 className="font-semibold text-gray-900 text-sm">
//               {skill.user?.name || "Unknown User"}
//             </h3>
//             <div className="flex items-center gap-1 text-xs text-gray-500">
//               {renderStars(skill.averageRating || 0)}
//               <span className="ml-1 text-gray-500">
//                 ({skill.reviewCount || 0})
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Skills Offered */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">Skills Offered</p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsOffered?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-black text-white text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Skills Wanted */}
//         <div>
//           <p className="text-xs font-medium text-gray-600 mb-2">Seeking to Learn</p>
//           <div className="flex flex-wrap gap-2">
//             {skill.skillsWanted?.map((s, i) => (
//               <span
//                 key={i}
//                 className="px-2 py-1 bg-green-100 text-green-900 text-xs rounded-full"
//               >
//                 {s}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3">
//           <div className="flex items-center gap-1">
//             <BsCalendar3 className="text-gray-400" />
//             <span>
//               {skill.user?.createdAt
//                 ? new Date(skill.user.createdAt).toLocaleString("en-US", {
//                     month: "long",
//                     year: "numeric",
//                   })
//                 : "September 2025"}
//             </span>
//           </div>
//           <button
//             onClick={() => onSendRequest(skill.id)}
//             className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-indigo-700 transition"
//           >
//             <IoMdSend className="text-lg" />
//             Send Request
//           </button>
//         </div>
//       </div>

//       {/* Toaster inside SkillCard (works globally) */}
//       <Toaster position="top-right" />
//     </div>
//   );
// };

// export default SkillCard;

import React, { useState } from "react";
import { FaEllipsisV, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdStarRate, MdStarBorder, MdOutlineStarHalf } from "react-icons/md";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { BsCalendar3, BsShare } from "react-icons/bs";
import DefaultIMG from "../../../assets/DefaultLM.png";
import { IoMdSend } from "react-icons/io";

import Tech_1 from "../../../assets/Tech_1.jpg";
import Tech_2 from "../../../assets/Tech_2.png";
import Tech_3 from "../../../assets/Tech_3.jpg";

import Cod_1 from "../../../assets/Cod_1.png";
import Cod_2 from "../../../assets/Cod_2.jpg";
import Cod_3 from "../../../assets/Cod_3.jpg";

import Lan_1 from "../../../assets/Lan_1.jpg";
import Lan_2 from "../../../assets/Lan_2.png";
import Lan_3 from "../../../assets/Lan_3.png";

import Art_1 from "../../../assets/Art_1.jpg";
import Art_2 from "../../../assets/Art_2.png";

import LF_1 from "../../../assets/LF_1.jpeg";
import LF_2 from "../../../assets/LF_2.jpg";

import GM_1 from "../../../assets/GM_1.jpg";
import GM_2 from "../../../assets/GM_2.jpg";

import Mus_1 from "../../../assets/Mus_1.jpg";
import Mus_2 from "../../../assets/Mus_2.jpg";
import Mus_3 from "../../../assets/Mus_3.png";

import toast, { Toaster } from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Category → Images mapping
const categoryImages = {
  Technology: [Tech_1, Tech_2, Tech_3],
  Coding: [Cod_1, Cod_2, Cod_3],
  Languages: [Lan_1, Lan_2, Lan_3],
  Art: [Art_1, Art_2],
  LifeCoach: [LF_1, LF_2],
  Sports: [GM_1, GM_2],
  Music: [Mus_1, Mus_2, Mus_3],
};

// Consistent image selection based on skill ID
const getConsistentCategoryImage = (category, skillId) => {
  const images = categoryImages[category];
  if (!images || images.length === 0) return null;
  const hash = Array.from(skillId || "").reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  const index = hash % images.length;
  return images[index];
};

// Render stars for rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0 text-amber-400 text-sm">
      {[...Array(fullStars)].map((_, i) => (
        <MdStarRate key={`full-${i}`} />
      ))}
      {hasHalfStar && <MdOutlineStarHalf />}
      {[...Array(emptyStars)].map((_, i) => (
        <MdStarBorder key={`empty-${i}`} />
      ))}
    </div>
  );
};

const SkillCard = ({
  skill,
  isBookmarked,
  onBookmarkToggle,
  onSendRequest,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Decide which image to show
  const consistentCategoryImage = getConsistentCategoryImage(
    skill.category,
    skill.id
  );
  const imageToShow = skill.image || consistentCategoryImage || DefaultIMG;

  const handleBookmark = () => {
    onBookmarkToggle(skill.id);
    toast.success(
      isBookmarked ? "Removed from bookmarks" : "Added to bookmarks 🤝",
      {
        style: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "12px",
          padding: "12px 16px",
        },
        icon: isBookmarked ? "🗑️" : "✅",
      }
    );
    setMenuOpen(false);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col hover-lift">
      {/* Skill Image with Overlay */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={imageToShow}
          alt="Skill"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={handleBookmark}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-200"
            title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {isBookmarked ? (
              <FaBookmark className="text-purple-600 text-sm" />
            ) : (
              <FaRegBookmark className="text-gray-700 text-sm" />
            )}
          </button>
          <button
            onClick={() => {
              toast("Share feature coming soon 🚀", {
                style: {
                  background: "#1f2937",
                  color: "#fff",
                  borderRadius: "12px",
                },
              });
            }}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-200"
            title="Share skill"
          >
            <BsShare className="text-gray-700 text-sm" />
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
            {skill.category || "General"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col space-y-4 flex-grow">
        {/* Profile & Rating */}
        <div className="flex items-center gap-3">
          <img
            src={
              skill.user?.profilePicture
                ? skill.user.profilePicture
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    skill.user?.name || "User"
                  )}&background=random&size=128`
            }
            alt={skill.user?.name || "User"}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          />

          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-base group-hover:text-purple-600 transition-colors">
              {skill.user?.name || "Unknown User"}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {renderStars(skill.averageRating || 0)}
              <span className="text-xs text-gray-500 font-medium">
                ({skill.reviewCount || 0} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Skills Offered */}
        <div className="flex-grow">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Skills Offered
          </p>
          <div className="flex flex-wrap gap-2">
            {skill.skillsOffered?.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-medium rounded-full shadow-sm"
              >
                {s}
              </span>
            ))}
            {skill.skillsOffered?.length > 3 && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{skill.skillsOffered.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Skills Wanted */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Seeking to Learn
          </p>
          <div className="flex flex-wrap gap-2">
            {skill.skillsWanted?.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200"
              >
                {s}
              </span>
            ))}
            {skill.skillsWanted?.length > 3 && (
              <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{skill.skillsWanted.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <BsCalendar3 className="text-gray-400" />
            <span>
              {skill.user?.createdAt
                ? new Date(skill.user.createdAt).toLocaleString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "Sep 2025"}
            </span>
          </div>
          <button
            onClick={() => onSendRequest(skill.id)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <IoMdSend className="text-base" />
            Send Request
          </button>
        </div>
      </div>

      {/* Toaster */}
      <Toaster position="top-right" />
    </div>
  );
};

export default SkillCard;
