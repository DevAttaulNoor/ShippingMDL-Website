export const BottomBar = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-center text-sm py-2 innerContainerPadding text-white bg-blue-950">
            &copy; {currentYear} Marine Dynamic Logistics. All rights reserved.
        </div>
    );
};
