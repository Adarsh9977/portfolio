import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const Divider = () => {
    return(
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="my-20">
                <MdKeyboardDoubleArrowDown size={40} color="white"/>
            </div>
        </div>
    );
}