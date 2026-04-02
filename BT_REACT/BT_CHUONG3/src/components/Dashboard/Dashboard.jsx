import React, { use, useState } from "react";
import './Dashboard.css'
function Dashboard() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userRole, setUserRole] = useState('admin');
    const [products, setProducts] = useState([
        { id: 1, name: 'Laptop XYZ', price: 1200, stock: 15 },
        { id: 2, name: 'Điện thoại ABC', price: 800, stock: 0 },
        { id: 3, name: 'Máy tính bảng DEF', price: 500, stock: 20 },
    ]);
    const total = products.length;
    const inStock = products.filter(p => p.stock > 0).length; // con hang
    const outStock = products.filter(p => p.stock === 0).length; // het hang
    return (
        <>
            <div className="div-container">
                <h1> Tổng Quan Sản Phẩm </h1>
                {
                    userRole === "admin" && (
                        <div className="div-statistical">
                            <h2>Thống kê </h2>
                            <p>Tổng sản phẩm : <b>{total} </b>  </p>
                            <p>Còn hàng :<b>{inStock}</b> </p>
                            <p>Hết hàng :<b>{outStock}</b> </p>
                        </div>
                    )
                }
                {/* loading */}
                {isLoading && <p className="loading">Đang tải dữ liệu sản phẩm...</p>}

                {/* error */}
                {error && (
                    <p style={{ color: "red" }}>
                        Lỗi tải dữ liệu. Vui lòng kiểm tra lại kết nối hoặc thử lại sau.
                    </p>
                )}

                {/* bang hien thi khi khong loading va khong error */}

                {!isLoading && !error && (
                    <table border="1" cellPadding="10">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Tồn kho</th>
                                {userRole === "admin" && <th>Hành động</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>{p.stock}</td>
                                    {userRole === 'admin' && (
                                        <td className="td-btn">
                                            <button className="btn-edit">Edit</button>
                                            <button className="btn-delete">Delete</button>
                                        </td>
                                    ) }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default Dashboard