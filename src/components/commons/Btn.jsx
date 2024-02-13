function Btn({ children, OnClick, ...props }) {
    return (
      <button className="bg-[#034494] text-sm text-white py-2 px-5 rounded-full" onClick={OnClick} {...props}>
        {children}
      </button>
    );
  }
  
 export function BtnOutline({children, ...props}) {
  return (
    <button className="text-[#034494] text-sm bg-white border-[#034494] border-2 py-2 px-5 rounded-full" {...props}>
      {children}
    </button>
  )
}

  export default Btn;