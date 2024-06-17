import { useState } from "react";
import "./index.scss";

export const PassTraining = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const checkPasswordStrength = (password) => {
    const suggestions = [];
    let score = 0;

    // Проверка длины пароля
    if (password.length >= 6) {
      score++;
    } else {
      suggestions.push("Пароль должен содержать не менее 6 символов.");
    }

    // Проверка наличия заглавных букв
    if (/[A-Z]/.test(password)) {
      score++;
    } else {
      suggestions.push("Добавьте хотя бы одну заглавную букву.");
    }

    // Проверка наличия строчных букв
    if (/[a-z]/.test(password)) {
      score++;
    } else {
      suggestions.push("Добавьте хотя бы одну строчную букву.");
    }

    // Проверка наличия цифр
    if (/[0-9]/.test(password)) {
      score++;
    } else {
      suggestions.push("Добавьте хотя бы одну цифру.");
    }

    // Проверка наличия специальных символов
    if (/[!@#$%^&*]/.test(password)) {
      score++;
    } else {
      suggestions.push("Добавьте хотя бы один специальный символ (!@#$%^&*).");
    }

    // Определение надежности пароля
    if (score < 2) {
      setStrength("Слабый");
    } else if (score < 4) {
      setStrength("Средний");
    } else if (score < 5) {
      setStrength("Хороший");
    } else {
      setStrength("Очень сильный");
    }

    setSuggestions(suggestions);
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <>
      <div>
        <div>
          <h2>
            На этой странице вы можете потренероваться в создании безопасного
            пароля
          </h2>
        </div>
        <div>
          <input
            className="input"
            type="text"
            value={password}
            onChange={handleChange}
            placeholder="Введите ваш пароль"
          />
          <div className="strength">Надежность: {strength}</div>
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
