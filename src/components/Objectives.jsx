import React from 'react';

const objetivosData = [
  { id: 1, goal: "Objetivo 1", target: 500, progress: 250, compliance: 50 },
  { id: 2, goal: "Objetivo 2", target: 1000000, progress: 50000, compliance: 5 },
  { id: 3, goal: "Objetivo 3", target: 1000, progress: 900, compliance: 90 },
  { id: 4, goal: "Objetivo 4", target: 150000, progress: 150000, compliance: 100 },
];

const getStatus = (compliance) => {
  if (compliance <= 35) return "text-red-500";
  if (compliance <= 75) return "text-orange-500";
  return "text-green-500";
};

const Objectives = () => {
  return (
    <section className="my-8 px-4">
      <h2 className="text-xl font-bold text-center">3. Objetivos Estratégicos</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Código</th>
            <th className="px-4 py-2">Objetivo</th>
            <th className="px-4 py-2">Meta</th>
            <th className="px-4 py-2">Avance</th>
            <th className="px-4 py-2">Cumplimiento</th>
            <th className="px-4 py-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {objetivosData.map((obj) => (
            <tr key={obj.id}>
              <td className="border px-4 py-2">{obj.id}</td>
              <td className="border px-4 py-2">{obj.goal}</td>
              <td className="border px-4 py-2">{`$${obj.target.toLocaleString()}`}</td>
              <td className="border px-4 py-2">{`$${obj.progress.toLocaleString()}`}</td>
              <td className="border px-4 py-2">{`${obj.compliance}%`}</td>
              <td className={`border px-4 py-2 ${getStatus(obj.compliance)}`}>
                {obj.compliance <= 35 ? "Crítico" : obj.compliance <= 75 ? "Aceptable" : "Exitoso"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Objectives;
