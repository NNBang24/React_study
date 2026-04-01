import React, { useState } from "react";
import '../css/Form.css'

function FormComponent() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [submitData, setSubmitData] = useState(null);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: [e.target.value]
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...form };
        if (!form.username || !form.email || !form.password) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        setSubmitData(data)
        setForm({
            username: '',
            email: '',
            password: ''
        })
    }
    return (
        <>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Đăng ký</h1>

                    <div className="form-group">
                        <label>Tên người dùng</label>
                        <input type="text" name="username" placeholder="Tên người dùng" value={form.username} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} />
                    </div>

                    <button type="submit"  >Đăng ký</button>
                </form>
                {
                    submitData && (
                        <div className="result">
                            <h3>Dữ liệu đã nhập</h3>
                            <p><b>Tên:</b>  {submitData.username} </p>
                            <p><b>Email:</b>{submitData.email} </p>
                            <p><b>Password:</b> {submitData.password} </p>
                        </div>
                    )}

            </div>
        </>
    )
}

export default FormComponent;