export { GET, POST } from "@/auth";

// /api/auth 관련 주소는 nextauth가 관리

// * catch-all route =>[...nextauth]
// GET/api/auth/a
// GET/api/auth/b
// GET/api/auth/a/b
// GET/api/auth/a/b/c ... 다 됨
