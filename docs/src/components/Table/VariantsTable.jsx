import styles from "./Table.module.scss";
import {tableData} from "@site/data/tableData";

const VariantsTable = () => {
    return (
        <div className={`table-responsive  ${styles.table_wrapper}`}>
            <table className={`table ${styles.table}`}>
                <thead className={`text-primary thead ${styles.thead}`}>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>City</td>
                        <td className="text-center">Score</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody className={`tbody ${styles.tbody}`}>
                    {tableData
                        ?.slice(0, 10)
                        .map((item, index) => (
                            <tr
                                key={index}
                                className={item.tableBg}
                            >
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td className="text-center">{item.score}</td>
                                <td>
                                    <i className={`${item?.statusIcon} text-${item?.badge?.status}`}/>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default VariantsTable;
