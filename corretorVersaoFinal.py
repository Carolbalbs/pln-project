from spellchecker import SpellChecker
import re
from language_tool_python import LanguageTool


def correct_spelling(word):
    spell = SpellChecker()
    if spell.correction(word) == word:
        return word
    else:
        suggestions = list(spell.candidates(word))
        print(f"Você quis dizer alguma dessas palavras em vez de '{word}'?")
        for i in suggestions:
            print(i)
        return suggestions[0] if suggestions else word


def correct_grammar(sentence):
    tool = LanguageTool('en')
    matches = tool.check(sentence)
    corrected_sentence = tool.correct(sentence)

    if matches:
        print("Sugestões de correção gramatical:")
        for match in matches:
            print(match)

    return corrected_sentence


def correct_spelling_sentence(sentence):
    words = re.findall(r'\b\w+\b', sentence)
    corrected_words = []
    for word in words:
        corrected_word = correct_spelling(word)
        corrected_words.append(corrected_word)
    corrected_sentence = ' '.join(corrected_words)
    corrected_sentence = correct_grammar(corrected_sentence)
    return corrected_sentence


def get_user_option():
    while True:
        print("\nPor favor, escolha uma opção:")
        print("1. Corrija uma frase")
        print("2. Corrija um parágrafo")
        print("3. Sair")

        try:
            option = int(input())
            if option < 1 or option > 3:
                print("Opção inválida. Por favor, tente novamente.")
            else:
                return option
        except ValueError:
            print("Entrada inválida. Por favor, coloque um número.")


def correct_user_input(option):
    if option == 1:
        sentence = input("Digite a frase que deseja corrigir: ")
        corrected_sentence = correct_spelling_sentence(sentence)
        print(f"\nFrase corrigida: {corrected_sentence}")
    elif option == 2:
        paragraph = input("Digite o parágrafo que deseja corrigir: ")
        sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', paragraph)
        corrected_sentences = []
        for sentence in sentences:
            corrected_sentence = correct_spelling_sentence(sentence)
            corrected_sentences.append(corrected_sentence)
        corrected_paragraph = ' '.join(corrected_sentences)
        print(f"\nParágrafo corrigido: {corrected_paragraph}")
    else:
        print("Saindo...")


if __name__ == "__main__":
    while True:
        option = get_user_option()
        if option == 3:
            break
        else:
            correct_user_input(option)
    