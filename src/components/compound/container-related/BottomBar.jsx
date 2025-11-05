export const BottomBar = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-center py-3 innerContainerPadding border-t-2 border-t-custom-green text-white bg-custom-blue">
            &copy; {currentYear} Marine Dynamic Logistics. All rights reserved.
        </div>
    );
};