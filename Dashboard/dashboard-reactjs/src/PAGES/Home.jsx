import React from "react";
import '../CSS/style.css';

function Home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* Boxicons */}
  <link
    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
    rel="stylesheet"
  />
  {/* My CSS */}
  <link rel="stylesheet" href="style.css" />
  <title>AdminHub</title>
  {/* SIDEBAR */}
  <section id="sidebar">
    <a href="#" className="brand">
      <i className="bx bxs-smile" />
      <span className="text">AdminHub</span>
    </a>
    <ul className="side-menu top">
      <li className="active">
        <a href="#">
          <i className="bx bxs-dashboard" />
          <span className="text">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt" />
          <span className="text">My Store</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-doughnut-chart" />
          <span className="text">Analytics</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-message-dots" />
          <span className="text">Message</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bxs-group" />
          <span className="text">Team</span>
        </a>
      </li>
    </ul>
    <ul className="side-menu">
      <li>
        <a href="#">
          <i className="bx bxs-cog" />
          <span className="text">Settings</span>
        </a>
      </li>
      <li>
        <a href="#" className="logout">
          <i className="bx bxs-log-out-circle" />
          <span className="text">Logout</span>
        </a>
      </li>
    </ul>
  </section>
  {/* SIDEBAR */}
  {/* CONTENT */}
  <section id="content">
    {/* NAVBAR */}
    <nav>
      <i className="bx bx-menu" />
      <a href="#" className="nav-link">
        Categories
      </a>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="bx bx-search" />
          </button>
        </div>
      </form>
      <input type="checkbox" id="switch-mode" hidden="" />
      <label htmlFor="switch-mode" className="switch-mode" />
      <a href="#" className="notification">
        <i className="bx bxs-bell" />
        <span className="num">8</span>
      </a>
      <a href="#" className="profile">
        <img src="img/people.png" />
      </a>
    </nav>
    {/* NAVBAR */}
    {/* MAIN */}
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <i className="bx bx-chevron-right" />
            </li>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className="bx bxs-cloud-download" />
          <span className="text">Download PDF</span>
        </a>
      </div>
      <ul className="box-info">
        <li>
          <i className="bx bxs-calendar-check" />
          <span className="text">
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-group" />
          <span className="text">
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <i className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <i className="bx bx-search" />
            <i className="bx bx-filter" />
          </div>
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status process">Process</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="img/people.png" />
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className="status completed">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Todos</h3>
            <i className="bx bx-plus" />
            <i className="bx bx-filter" />
          </div>
          <ul className="todo-list">
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
            <li className="not-completed">
              <p>Todo List</p>
              <i className="bx bx-dots-vertical-rounded" />
            </li>
          </ul>
        </div>
      </div>
    </main>
    {/* MAIN */}
  </section>
  {/* CONTENT */}
</>

  );
}

export default Home;
