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
const FormsItems = () => {
    const [formValues, setFormValues] = (0, react_1.useState)({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, password } = formValues;
        if (name && email && phone && password) {
            console.log("Submitted data:", formValues);
            react_hot_toast_1.toast.success("রেজিস্ট্রেশন সফল হয়েছে!");
        }
        else {
            react_hot_toast_1.toast.error("অনুগ্রহ করে সব ঘর পূরণ করুন!");
        }
    };
    return (<form className="space-y-5" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="আপনার পুরো নাম" value={formValues.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-none" required/>
      <input type="email" name="email" placeholder="আপনার ইমেইল" value={formValues.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-none" required/>
      <input type="tel" name="phone" placeholder="ফোন নাম্বার" value={formValues.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-none" required/>
      <input type="password" name="password" placeholder="পাসওয়ার্ড" value={formValues.password} onChange={handleChange} className="w-full px-4 py-3 border rounded-none" required/>
      <button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-none">
        নিবন্ধন করুন <lu_1.LuDoorOpen size={24}/>
      </button>
    </form>);
};
exports.default = FormsItems;
