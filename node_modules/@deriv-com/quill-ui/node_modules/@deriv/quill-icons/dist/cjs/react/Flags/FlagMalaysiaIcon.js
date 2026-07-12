"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlagMalaysiaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagMalaysiaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#E1244A', d: 'M13 0v1.143h10.808A2 2 0 0 0 22 0zM24 2.286H13v1.143h11zM24 4.571H13v1.143h11zM24 6.857H13V8h11zM24 9.143H0v1.143h24zM24 11.429H0v1.142h24zM24 13.714H0V14c0 .307.07.597.192.857h23.616c.123-.26.192-.55.192-.857z' }),
    React.createElement("path", { fill: '#0C3F8E', fillRule: 'evenodd', d: 'M2 0h11v9.145H0V2a2 2 0 0 1 2-2m5.856 1.894a3.429 3.429 0 1 0 0 5.356 2.857 2.857 0 1 1 0-5.356M9.183 3.72 9 2.5l-.183 1.22-.708-1.022.38 1.177-1.092-.622.865.9L7 4.055l1.18.445L7 4.945l1.262-.098-.865.9 1.092-.622-.38 1.177.708-1.022L9 6.5l.183-1.22.708 1.022-.38-1.177 1.093.622-.865-.9L11 4.945 9.82 4.5 11 4.055l-1.261.098.864-.9-1.092.622.38-1.177z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#FFD34F', fillRule: 'evenodd', d: 'M5.714 1.143c.81 0 1.555.28 2.142.75a2.857 2.857 0 1 0 0 5.356 3.429 3.429 0 1 1-2.14-6.107M9 2.5l.183 1.22.708-1.022-.38 1.177 1.093-.622-.865.9L11 4.055 9.82 4.5l1.18.445-1.261-.098.864.9-1.092-.622.38 1.177-.708-1.022L9 6.5l-.183-1.22-.708 1.022.38-1.177-1.092.622.865-.9L7 4.945 8.18 4.5 7 4.055l1.262.098-.865-.9 1.092.622-.38-1.177.708 1.022z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M23.808 1.143H13v1.143h11V2a2 2 0 0 0-.192-.857M13 3.429V4.57h11V3.43zM13 5.714v1.143h11V5.714zM13 8v1.143h11V8zM0 11.429v-1.143h24v1.143zM0 12.571h24v1.143H0zM22 16a2 2 0 0 0 1.808-1.144v.001H.192l-.035-.079A2 2 0 0 0 2 16z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })));
exports.FlagMalaysiaIcon = FlagMalaysiaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagMalaysiaIcon);
exports.default = ForwardRef;
