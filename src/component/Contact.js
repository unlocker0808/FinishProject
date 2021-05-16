import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="text-center content-section" id="contact">
                    <div>
                        <div className="container">
                        <form method="post">
        <h2 className="text-center1">Liên hệ với chúng tôi</h2>
        <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Họ tên" /></div>
        <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
        <div className="form-group"><textarea className="form-control" name="message" placeholder="Ý kiến cá nhân" rows={14} defaultValue={""} /></div>
        <div className="form-group"><button className="btn btn-primary" type="submit">Gửi</button></div>
      </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
