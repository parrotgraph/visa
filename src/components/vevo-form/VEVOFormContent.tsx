import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VEVOFormContent = () => {
  const [formData, setFormData] = useState({
    documentType: "",
    referenceType: "",
    dateOfBirth: "",
    documentNumber: "",
    countryOfDocument: "Country",
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white w-full max-w-[1504px] mx-auto flex flex-col gap-4">
      {/* Section Header */}
      <div className="bg-[#072243] px-4 py-2">
        <h2 className="text-white font-arial text-base font-bold">
          Visa holder enquiry
        </h2>
      </div>

      {/* Form Container */}
      <div className="px-4 pb-5">
        <div className="max-w-[1472px] mx-auto">
          {/* Instructions */}
          <div className="mb-4">
            <p className="text-black font-arial text-base mb-1">
              Please complete the following details to view your visa
              entitlements.
            </p>
            <p className="text-black font-arial text-base">
              Fields marked <span className="text-[#e00]">*</span> must be
              completed.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 mb-6">
            {/* Document Type */}
            <div className="flex items-start gap-3">
              <div className="w-[515px] flex items-center gap-1">
                <label className="text-black font-arial text-base">
                  Document type
                </label>
                <span className="text-[#ad1a1f] text-lg">*</span>
              </div>
              <div className="flex-1 max-w-[957px]">
                <div className="relative inline-block">
                  <select
                    value={formData.documentType}
                    onChange={(e) =>
                      handleInputChange("documentType", e.target.value)
                    }
                    className="w-64 px-2 py-1 border border-[#bebfc7] bg-white font-arial text-base appearance-none"
                  >
                    <option value="">Please choose a document type</option>
                    <option value="DFTTA">DFTTA</option>
                    <option value="ImmiCard">ImmiCard</option>
                    <option value="Passport">Passport</option>
                    <option value="Plo56(M56)">Plo56(M56)</option>
                    <option value="Titre de voyage">Titre de voyage</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
                <img
                  src="/api/placeholder/12/12"
                  alt=""
                  className="ml-1 w-3 h-3 inline"
                />
              </div>
            </div>

            {/* Only show other fields if document type is selected */}
            {formData.documentType && (
              <>
                {/* Reference Type */}
                <div className="flex items-start gap-3">
                  <div className="w-[515px] flex items-center gap-1">
                    <label className="text-black font-arial text-base">
                      Reference type
                    </label>
                    <span className="text-[#ad1a1f] text-lg">*</span>
                  </div>
                  <div className="flex-1 max-w-[957px]">
                    <select
                      value={formData.referenceType}
                      onChange={(e) =>
                        handleInputChange("referenceType", e.target.value)
                      }
                      className="w-full max-w-[1472px] px-2 py-1 border border-[#bebfc7] bg-white font-arial text-base"
                    >
                      <option value="">Please choose a reference type</option>
                      <option value="passport">Transaction Reference Number (TRN)</option>
                      <option value="other">Visa Evidence Number</option>
                      <option value="other">Visa Grant Number</option>
                      <option value="other">Password</option>
                    </select>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-[515px] flex items-center gap-1">
                      <label className="text-black font-arial text-base">
                        Date of birth
                      </label>
                      <span className="text-[#ad1a1f] text-lg">*</span>
                    </div>
                    <div className="flex-1 max-w-[957px] flex items-center gap-1">
                      <div className="flex items-center gap-0">
                        <input
                          type="text"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                            handleInputChange("dateOfBirth", e.target.value)
                          }
                          className="w-52 h-6 px-2 border border-[#bebfc7] bg-white font-arial text-base"
                          placeholder=""
                        />
                        <button className="w-6 h-6 border border-[#bebfc7] bg-[#f0f0f0] flex items-center justify-center">
                          <Calendar className="w-4 h-4" />
                        </button>
                      </div>
                      <img
                        src="/api/placeholder/12/12"
                        alt=""
                        className="ml-1 w-3 h-3"
                      />
                    </div>
                  </div>

                  {/* Document Number */}
                  <div className="flex items-start gap-3">
                    <div className="w-[515px] flex items-center gap-1">
                      <label className="text-black font-arial text-base">
                        Document number
                      </label>
                      <span className="text-[#ad1a1f] text-lg">*</span>
                    </div>
                    <div className="flex-1 max-w-[957px] flex items-center gap-1">
                      <input
                        type="text"
                        value={formData.documentNumber}
                        onChange={(e) =>
                          handleInputChange("documentNumber", e.target.value)
                        }
                        className="w-[438px] h-6 px-2 border border-[#bebfc7] bg-white font-arial text-base"
                      />
                      <img
                        src="/api/placeholder/12/12"
                        alt=""
                        className="ml-1 w-3 h-3"
                      />
                    </div>
                  </div>

                  {/* Country of Document */}
                  <div className="flex items-start gap-3">
                    <div className="w-[515px] flex items-center gap-1">
                      <label className="text-black font-arial text-base">
                        Country of document
                      </label>
                      <span className="text-[#ad1a1f] text-lg">*</span>
                    </div>
                    <div className="flex-1 max-w-[957px] flex items-center gap-1">
                      <select
                        value={formData.countryOfDocument}
                        onChange={(e) =>
                          handleInputChange("countryOfDocument", e.target.value)
                        }
                        className="w-[516px] px-2 py-1 border border-[#bebfc7] bg-white font-arial text-base"
                      >
                        <option value="Country">Country</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                      <img
                        src="/api/placeholder/12/12"
                        alt=""
                        className="ml-1 w-3 h-3"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Terms and Conditions - Only show if document type is selected */}
          {formData.documentType && (
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <div className="w-[515px]"></div>
                <div className="flex-1 max-w-[957px]">
                  <div className="mb-2">
                    <a
                      href="#"
                      className="text-[#072243] font-arial text-base underline hover:no-underline"
                    >
                      View Terms and Conditions
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={(e) =>
                        handleInputChange("agreeToTerms", e.target.checked)
                      }
                      className="w-3 h-3 border border-[#767676] bg-white rounded-sm mt-0.5"
                    />
                    <label className="text-black font-arial text-base flex items-center gap-1">
                      I have read and agree to the terms and conditions
                      <span className="text-[#ad1a1f] text-lg">*</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons - Only show if document type is selected */}
          {formData.documentType && (
            <div className="border border-[#bebfc7] bg-[#f2f2f2] p-2">
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  className="border border-black bg-[#f0f0f0] text-black font-arial text-base px-2 py-1 hover:bg-gray-200"
                >
                  Clear
                </Button>
                <Button
                  variant="outline"
                  className="border border-black bg-[#f0f0f0] text-black font-arial text-base px-2 py-1 hover:bg-gray-200"
                >
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
