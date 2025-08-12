"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface FormData {
  name: string;
  email: string;
  organization: string;
  challenge: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  organization?: string;
  challenge?: string;
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    challenge: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization name is required";
    }

    if (!formData.challenge.trim()) {
      newErrors.challenge = "Challenge selection is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", organization: "", challenge: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        challenge:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="mb-2 text-lg font-semibold text-green-800 dark:text-green-200">
          {t("success")}
        </h3>
        <p className="text-green-700 dark:text-green-300">
          {t("successMessage")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {t("name")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
            errors.name
              ? "border-red-300 focus:ring-red-500"
              : "border-accent-300 focus:ring-primary-500 dark:border-accent-700"
          } bg-background text-foreground`}
          placeholder={t("namePlaceholder")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {t("email")} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
            errors.email
              ? "border-red-300 focus:ring-red-500"
              : "border-accent-300 focus:ring-primary-500 dark:border-accent-700"
          } bg-background text-foreground`}
          placeholder={t("emailPlaceholder")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Organization Field */}
      <div>
        <label
          htmlFor="organization"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {t("organization")} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
            errors.organization
              ? "border-red-300 focus:ring-red-500"
              : "border-accent-300 focus:ring-primary-500 dark:border-accent-700"
          } bg-background text-foreground`}
          placeholder={t("organizationPlaceholder")}
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
        )}
      </div>

      {/* Challenge Selection */}
      <div>
        <label
          htmlFor="challenge"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {t("challenge")} <span className="text-red-500">*</span>
        </label>
        <select
          id="challenge"
          name="challenge"
          value={formData.challenge}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
            errors.challenge
              ? "border-red-300 focus:ring-red-500"
              : "border-accent-300 focus:ring-primary-500 dark:border-accent-700"
          } bg-background text-foreground`}
        >
          <option value="">{t("challengePlaceholder")}</option>
          <option value="manual">{t("challengeOptions.manual")}</option>
          <option value="scattered">{t("challengeOptions.scattered")}</option>
          <option value="compliance">{t("challengeOptions.compliance")}</option>
          <option value="other">{t("challengeOptions.other")}</option>
        </select>
        {errors.challenge && (
          <p className="mt-1 text-sm text-red-600">{errors.challenge}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full rounded-lg px-6 py-3 font-medium text-white transition-colors ${
          isSubmitting
            ? "cursor-not-allowed bg-accent-400 dark:bg-accent-600"
            : "bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        }`}
      >
        {isSubmitting ? t("submitting") : t("submit")}
      </button>

      {errors.challenge && !formData.challenge && (
        <p className="text-center text-sm text-red-600">{t("error")}</p>
      )}
    </form>
  );
}
