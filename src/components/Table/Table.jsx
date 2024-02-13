import { useState } from "react";
import tableData from "../data/tableData";
import tablesStyle from "../../assets/scss/Tables.module.scss";

const Table = ({ isSearch = false, isVariants = false }) => {
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState(10);

    return (
        <div className={`table-responsive  ${tablesStyle.table_wrapper}`}>
            {isSearch ? (
                <div className="d-flex justify-content-between align-items-center mt-2 mb-4">
                    <div
                        className={`d-flex align-items-center ${tablesStyle.search_wrapper}`}
                    >
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="btn" type="submit">
                            <i className="fa fa fa-search"></i>
                        </button>
                    </div>
                    <div className={tablesStyle.show_entries}>
                        <select
                            value={select}
                            className="btn btn-primary"
                            onChange={(e) => setSelect(e.target.value)}
                        >
                            <option value={10}> Show 10 entries</option>
                            <option value={25}> Show 25 entries</option>
                            <option value={50}> Show 50 entries</option>
                            <option value={100}> Show 100 entries</option>
                        </select>
                    </div>
                </div>
            ) : null}

            <table className={`table ${tablesStyle.table}`}>
                <thead className={`text-primary thead ${tablesStyle.thead}`}>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>City</td>
                        <td className="text-center">Score</td>
                        {isVariants ? <td>Status</td> : null}
                    </tr>
                </thead>
                <tbody className={`tbody ${tablesStyle.tbody}`}>
                    {tableData
                        ?.slice(0, select)
                        .filter((item) => {
                            return search.toLowerCase() === ""
                                ? item
                                : item.name
                                      .toLocaleLowerCase()
                                      .includes(search) ||
                                      item.email
                                          .toLocaleLowerCase()
                                          .includes(search) ||
                                      item.city
                                          .toLocaleLowerCase()
                                          .includes(search);
                        })
                        .map((item, index) => (
                            <tr
                                key={index}
                                className={`${
                                    isVariants && item.tableBg
                                        ? item.tableBg
                                        : ""
                                }`}
                            >
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td className="text-center">{item.score}</td>
                                {isVariants ? (
                                    <td>
                                        {item?.statusIcon ? (
                                            <i
                                                className={`${item?.statusIcon} text-${item?.badge?.status}`}
                                            ></i>
                                        ) : null}
                                    </td>
                                ) : null}
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
