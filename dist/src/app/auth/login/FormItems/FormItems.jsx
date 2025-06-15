"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const lu_1 = require("react-icons/lu");
const react_hot_toast_1 = require("react-hot-toast");
const FormItems = () => {
    const [formValues, setFormValues] = (0, react_1.useState)({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formValues;
        if (email && password) {
            console.log("Login data:", formValues);
            react_hot_toast_1.toast.success("লগইন সফল হয়েছে!");
        }
        else {
            react_hot_toast_1.toast.error("ইমেইল এবং পাসওয়ার্ড দিন!");
        }
    };
    return (<form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ইমেইল
        </label>
        <input type="email" name="email" placeholder="আপনার ইমেইল লিখুন" value={formValues.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          পাসওয়ার্ড
        </label>
        <input type="password" name="password" placeholder="আপনার পাসওয়ার্ড লিখুন" value={formValues.password} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" required/>
      </div>
      <button type="submit" className="drawer-button btn btn-black px-5 py-5 search-menu w-full flex items-center justify-center gap-2">
        লগইন করুন <lu_1.LuDoorOpen size={24}/>
      </button>
    </form>);
};
exports.default = FormItems;
