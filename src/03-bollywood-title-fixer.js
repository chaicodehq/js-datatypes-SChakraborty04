/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  // Your code here
  if(typeof title != 'string') return ""
  title = title.trim();
  if(title=="")return "";
  let titleArray = title.split(/\s+/).filter(Boolean);
  
  let exception = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"]
  titleArray = titleArray.map(e=>e.toLowerCase())
  titleArray=titleArray
  .map((e)=>{
    if(!exception.includes(e)){
      return `${e.charAt(0).toUpperCase()}${e.slice(1)}`
    }
    else{
      return e;
    }
  })
  titleArray[0]=`${titleArray[0].charAt(0).toUpperCase()}${titleArray[0].slice(1)}`
  return titleArray.join(" ")
}
