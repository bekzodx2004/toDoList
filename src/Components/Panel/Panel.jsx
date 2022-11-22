import React from "react";

import { useState } from "react";
import data from "../API";

const Panel = () => {
  const [api, setApi] = useState(data);

  const [ismi, setIsmi] = useState("");
  const [fam, setFam] = useState("");
  const [kursi, setKursi] = useState("");
  const [yon, setYon] = useState("");

  const add = (e) => {
    let newUser = {
      id: Date.now(),
      ismi: ismi,
      familiyasi: fam,
      kursi: kursi,
      yonalishi: yon,
    };

    if (
      newUser.ismi != "" &&
      newUser.familiyasi != "" &&
      newUser.kursi != "" &&
      newUser.yonalishi != ""
    ) {
      setApi([...api, newUser]);
    } else {
      setApi(api);
    }
    setIsmi("");
    setFam("");
    setKursi("");
    setYon("");
    e.preventDefault();
  };

  const olibTasha = (id) => {
    let deleted = api.filter((d) => {
      return d.id != id;
    });

    setApi(deleted);
  };

  return (
    <div className="panel p-5">
      <form action="">
        <input
          type="text"
          className="form-control mt-3"
          value={ismi}
          onChange={(e) => setIsmi(e.target.value)}
          placeholder="Ismi..."
        />
        <input
          type="text"
          className="form-control mt-3"
          value={fam}
          onChange={(e) => setFam(e.target.value)}
          placeholder="Familiyasi..."
        />
        <input
          type="text"
          className="form-control mt-3"
          value={kursi}
          onChange={(e) => setKursi(e.target.value)}
          placeholder="Kursi..."
        />
        <input
          type="text"
          className="form-control mt-3"
          value={yon}
          onChange={(e) => setYon(e.target.value)}
          placeholder="Yo'nalishi..."
        />
        <button onClick={add} className="btn btn-success w-100 mt-3">
          Qo'shish
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            {" "}
            <th scope="col">#</th> <th scope="col">Ismi</th>{" "}
            <th scope="col">Familiyasi</th> <th scope="col">Kursi</th>{" "}
            <th scope="col">Yo'nalishi</th> <th scope="col">O'chirish</th>
          </tr>
        </thead>
        <tbody>
          {api.map((user, index) => {
            return (
              <tr key={user.id}>
                {" "}
                <th scope="row">{index + 1}</th> <td>{user.ismi}</td>{" "}
                <td>{user.familiyasi}</td> <td>{user.kursi}</td>{" "}
                <td>{user.yonalishi}</td>{" "}
                <td>
                  {" "}
                  <button
                    className="btn btn-danger"
                    onClick={() => olibTasha(user.id)}
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Panel;
