"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaPencil, FaTrash, FaPlus } from "react-icons/fa6";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const { modules, addModule, deleteModule, updateModule, editModule } =
    useModulesStore();
  const [moduleName, setModuleName] = useState("");
  const courseModules = modules.filter((m) => m.course === cid);

  return (
    <div>
      <div id="wd-modules-controls" className="mb-4 flex flex-wrap gap-2">
        <input
          id="wd-module-name"
          value={moduleName}
          placeholder="New module name"
          onChange={(e) => setModuleName(e.target.value)}
          className="rounded border border-gray-400 px-3 py-2 text-sm"
        />
        <button
          type="button"
          id="wd-add-module-btn"
          onClick={() => {
            addModule({ name: moduleName, course: cid as string });
            setModuleName("");
          }}
          className="flex items-center gap-1 rounded bg-red-600 px-3 py-2 text-sm text-white"
        >
          <FaPlus /> Module
        </button>
        <button type="button" className="rounded border border-gray-400 px-3 py-2 text-sm">
          Collapse All
        </button>
        <button type="button" className="rounded border border-gray-400 px-3 py-2 text-sm">
          View Progress
        </button>
      </div>

      <ul id="wd-modules" className="list-none p-0">
        {courseModules.map((module) => (
          <li key={module._id} className="wd-module mb-4 border border-gray-300">
            <div className="wd-title flex items-center justify-between bg-gray-200 p-3 text-lg font-medium">
              {!module.editing && <span>{module.name}</span>}
              {module.editing && (
                <input
                  className="rounded border border-gray-400 px-2 py-1 text-base"
                  value={module.name}
                  onChange={(e) =>
                    updateModule({ ...module, name: e.target.value, editing: true })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") updateModule({ ...module, editing: false });
                  }}
                />
              )}
              <span className="flex items-center gap-3">
                <FaPencil
                  id="wd-edit-module-btn"
                  className="cursor-pointer text-gray-600"
                  onClick={() => editModule(module._id)}
                />
                <FaTrash
                  id="wd-delete-module-btn"
                  className="cursor-pointer text-red-600"
                  onClick={() => deleteModule(module._id)}
                />
                <span className="text-green-700">&#10003;</span>
              </span>
            </div>
            <ul className="wd-lessons list-none p-0">
              {module.lessons?.map((lesson) => (
                <li key={lesson._id} className="wd-lesson border-l-4 border-green-600 p-3">
                  <div className="wd-title font-medium">{lesson.name}</div>
                  <ul className="wd-content ml-5 list-disc text-sm text-gray-700">
                    <li className="wd-content-item">{lesson.description}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
