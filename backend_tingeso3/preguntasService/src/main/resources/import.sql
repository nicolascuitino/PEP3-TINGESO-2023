INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('basico','number1 = 5' ||chr(10)|| 'number2 = 4' ||chr(10)|| 'sum = number1 + number2' ||chr(10)|| 'print(''La suma de los numeros es:'', sum) ','La suma de los numeros es:9');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('basico','number1 = 5' ||chr(10)|| 'number2 = -4' ||chr(10)|| 'sum = number1 + number2' ||chr(10)|| 'print(''La suma de los numeros es:'', sum) ','La suma de los numeros es:1');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('basico','num1 = 16' ||chr(10)|| 'num2 = 4' ||chr(10)|| 'sum = num1 + num2' ||chr(10)|| 'sub = num1 - num2' ||chr(10)|| 'mul = num1 * num2' ||chr(10)|| 'print(''El resultado de la operacion es:'', sub) ','El resultado de la operacion es:12');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('basico','num1 = -16' ||chr(10)|| 'num2 = 4' ||chr(10)|| 'sum = num1 + num2' ||chr(10)|| 'sub = num1 - num2' ||chr(10)|| 'mul = num1 * num2' ||chr(10)|| 'print(''El resultado de la operacion es:'', mul) ','El resultado de la operacion es:-64');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('intermedio','num1 = 54' ||chr(10)|| 'if (num1 % 2) == 0:' ||chr(10)|| '   print("{0} es numero par".format(num1))' ||chr(10)|| 'else:' ||chr(10)|| '   print("{0} es numero impar".format(num1))','54 es numero par');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('intermedio','num1 = 77' ||chr(10)|| 'if (num1 % 2) == 0:' ||chr(10)|| '   print("{0} es numero par".format(num1))' ||chr(10)|| 'else:' ||chr(10)|| '   print("{0} es numero impar".format(num1))','77 es numero impar');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('intermedio','def get_vowels(String):' ||chr(10)|| '    return [each for each in String if each in "aeiou"]' ||chr(10)|| 'get_string1 = "hello"' ||chr(10)|| 'get_string2 = "python is fun"' ||chr(10)|| 'get_string3 = "12345xyz"' ||chr(10)|| 'print("Las vocales son:  ",get_vowels(get_string1))','Las vocales son: [‘e’, ‘o’]');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('intermedio','def get_vowels(String):' ||chr(10)|| '    return [each for each in String if each in "aeiou"]' ||chr(10)|| 'get_string1 = "hello"' ||chr(10)|| 'get_string2 = "python is fun"' ||chr(10)|| 'get_string3 = "12345xyz"' ||chr(10)|| 'print("Las vocales son:  ",get_vowels(get_string3))','Las vocales son: []');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('avanzado','def isConsonant(ch):' ||chr(10)|| '' ||chr(10)|| '    ch = ch.upper()' ||chr(10)|| '' ||chr(10)|| '    return not (ch == ''A'' or ch == ''E'' or' ||chr(10)|| '' ||chr(10)|| '                ch == ''I'' or ch == ''O'' or' ||chr(10)|| '' ||chr(10)|| '                ch == ''U'') and ord(ch) >= 65 and ord(ch) <= 90' ||chr(10)|| '' ||chr(10)|| 'def totalConsonants(string, n):' ||chr(10)|| '' ||chr(10)|| '    if n == 1:' ||chr(10)|| '' ||chr(10)|| '        return isConsonant(string[0])' ||chr(10)|| '' ||chr(10)|| '    return totalConsonants(string, n - 1) + isConsonant(string[n-1])' ||chr(10)|| '' ||chr(10)|| 'string = "abc de"' ||chr(10)|| '' ||chr(10)|| 'print(totalConsonants(string, len(string)))','3');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('avanzado','def funct1(arr, n):' ||chr(10)|| '' ||chr(10)|| '    if(n==1):' ||chr(10)|| '' ||chr(10)|| '        return arr[0]' ||chr(10)|| '' ||chr(10)|| '    else:' ||chr(10)|| '' ||chr(10)|| '        return min(funct1(arr[1:], n-1), arr[0])' ||chr(10)|| '' ||chr(10)|| 'def funct2(arr, n):' ||chr(10)|| '' ||chr(10)|| '    if n == 1:' ||chr(10)|| '' ||chr(10)|| '        return arr[0]' ||chr(10)|| '' ||chr(10)|| '    else:' ||chr(10)|| '' ||chr(10)|| '        return max(getMax(arr[1:], n-1), arr[0])' ||chr(10)|| '' ||chr(10)|| 'arr = [12, 1234, 45, 67, 1]' ||chr(10)|| '' ||chr(10)|| 'print("El elemento del arreglo es: ", funct1(arr, n));' ,'1');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('avanzado','def funct1(arr, n):' ||chr(10)|| '' ||chr(10)|| '    if(n==1):' ||chr(10)|| '' ||chr(10)|| '        return arr[0]' ||chr(10)|| '' ||chr(10)|| '    else:' ||chr(10)|| '' ||chr(10)|| '        return min(funct1(arr[1:], n-1), arr[0])' ||chr(10)|| '' ||chr(10)|| 'def funct2(arr, n):' ||chr(10)|| '' ||chr(10)|| '    if n == 1:' ||chr(10)|| '' ||chr(10)|| '        return arr[0]' ||chr(10)|| '' ||chr(10)|| '    else:' ||chr(10)|| '' ||chr(10)|| '        return max(getMax(arr[1:], n-1), arr[0])' ||chr(10)|| '' ||chr(10)|| 'arr = [12, 1234, 45, 67, 1]' ||chr(10)|| '' ||chr(10)|| 'print("El elemento del arreglo es: ", funct2(arr, n));' ,'1234');

INSERT INTO preguntas(dificultad,codigo,respuesta) VALUES ('avanzado','def function(n, i = 2):' ||chr(10)|| '' ||chr(10)|| '    if (n <= 2):' ||chr(10)|| '' ||chr(10)|| '        return True if(n == 2) else False' ||chr(10)|| '' ||chr(10)|| '    if (n % i == 0):' ||chr(10)|| '' ||chr(10)|| '        return False' ||chr(10)|| '' ||chr(10)|| '    if (i * i > n):' ||chr(10)|| '' ||chr(10)|| '        return True' ||chr(10)|| '' ||chr(10)|| '    return function(n, i + 1)' ||chr(10)|| '' ||chr(10)|| 'n = 15' ||chr(10)|| '' ||chr(10)|| 'if (function(n)):' ||chr(10)|| '' ||chr(10)|| '    print("Yes")' ||chr(10)|| '' ||chr(10)|| 'else:' ||chr(10)|| '' ||chr(10)|| '    print("No")','1234');

