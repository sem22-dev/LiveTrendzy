
interface ProductProps {
    title: string;
    price: string;
}

const Product: React.FC<ProductProps> = ({ title, price }) => {
    return (
        <div className="bg-black h-64 relative">
            <h3 className="text-white absolute bottom-2 left-2">{title}</h3>
            <p className="text-white absolute bottom-2 right-2">{price}</p>
        </div>
    );
};

export default Product;
