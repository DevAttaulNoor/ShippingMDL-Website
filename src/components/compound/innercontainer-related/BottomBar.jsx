export const BottomBar = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-center text-sm py-2 innerContainerPadding text-white bg-custom-green">
            &copy; {currentYear} Marine Dynamic Logistics. All rights reserved.
        </div>
    );
};