import { getSupabase, getServiceSupabase } from '@/lib/supabase';

// Helper to get authenticated user from Supabase token
export async function getUser(request: Request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) return null;

    const token = authHeader.split(' ')[1];

    const supabase = getSupabase();
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) return null;

    // Get profile
    const serviceClient = getServiceSupabase();
    const { data: profile } = await serviceClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    return profile ? { ...profile, authUser: user } : null;
}

// Legacy exports for backward compatibility
export function extractToken(authHeader: string | null): string | null {
    if (!authHeader?.startsWith('Bearer ')) return null;
    return authHeader.split(' ')[1];
}

export function verifyToken(token: string) {
    // With Supabase auth, token verification happens via getUser
    return { token };
}
