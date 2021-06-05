import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

class Servers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    server: "Server 1",
                    status: "running",
                    appList: ["PL", "AM", "IM"]
                },
                {
                    server: "Server 2",
                    status: "running",
                    appList: ["PL", "AM"]
                },
                {
                    server: "Server 3",
                    status: "warning",
                    appList: ["PL", "AM", "IM"]
                },
                {
                    server: "Server 4",
                    status: "offline",
                    appList: ["PL", "AM", "IM"]
                },
                {
                    server: "Server 5",
                    status: "running",
                    appList: ["PL", "IM"]
                },
                {
                    server: "Server 6",
                    status: "running",
                    appList: ["PL", "AM", "IM"]
                },
                { server: "Server 7", status: "running", appList: ["PL"] },
                {
                    server: "Server 8",
                    status: "running",
                    appList: ["PL", "AM", "IM"]
                },
                {
                    server: "Server 9",
                    status: "running",
                    appList: ["PL", "AM", "IM"]
                },
                {
                    server: "Server 10",
                    status: "running",
                    appList: ["PL", "AM", "IM"]
                },
                {
                    server: "Server 11",
                    status: "running",
                    appList: ["PL", "AM", "IM"]
                },
                {
                    server: "Server 12",
                    status: "running",
                    appList: ["PL", "AM", "IM"]
                }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <Row type="flex" justify="space-around" align="middle">
                    {this.state.items.map(item => (
                        <Col span={5} className="box">
                            <div className={["server", item.status].join(" ")}>
                                <ul>
                                    <li />
                                    <li />
                                    <li />
                                </ul>
                            </div>
                            <ul className="appList">
                                {item.appList.map(app => (
                                    <li>{app}</li>
                                ))}
                            </ul>
                            <h6 className="server-name">{item.server}</h6>
                        </Col>
                    ))}
                </Row>
            </React.Fragment>
        );
    }
}